import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchProviders,
  searchProviders,
  Provider,
} from "../services/providerService";
import ProviderCard from "../components/ProviderCard";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { useToast } from "@/hooks/use-toast";

const ProviderList: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    loadProviders();
  }, []);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (searchQuery !== "") {
        handleSearch(searchQuery);
      } else {
        loadProviders();
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  const loadProviders = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProviders();
      setProviders(data);
      console.log("Loaded providers:", data.length);
    } catch (err) {
      setError("Failed to load providers. Please try again.");
      toast({
        title: "Error",
        description: "Failed to load providers. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      setSearching(true);
      setError(null);
      const results = await searchProviders(query);
      setProviders(results);
      console.log(`Search results for "${query}":`, results.length);
    } catch (err) {
      setError("Search failed. Please try again.");
      toast({
        title: "Search Error",
        description: "Search failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSearching(false);
    }
  };

  const handleProviderClick = (providerId: string) => {
    navigate(`/providers/${providerId}`);
  };

  if (loading && !searching) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error && !searching) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <ErrorMessage message={error} onRetry={loadProviders} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learning Support Provider Directory
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find qualified learning support professionals to help your child
            thrive. Browse our directory of specialized therapists, coaches, and
            educators.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              {searchQuery
                ? `Search Results (${providers.length})`
                : `All Providers (${providers.length})`}
            </h2>
            {searching && (
              <div className="flex items-center text-blue-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Searching...
              </div>
            )}
          </div>
        </div>

        {/* Provider Grid */}
        {providers.length === 0 && !loading && !searching ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {searchQuery
                ? "No providers found matching your search."
                : "No providers available."}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-blue-600 hover:text-blue-700 underline"
              >
                Clear search to see all providers
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onClick={() => handleProviderClick(provider.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderList;
