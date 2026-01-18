'use client'
import { useQuery } from '@tanstack/react-query';
import { getFaqs } from '../utils/api';

export function useFaq() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['faqs'],
    queryFn: getFaqs,
    staleTime: 1000 * 60 * 5,
    retry: false,
    onError: (err) => {
      console.log('FAQ fetch error:', err);
    }
  });

  return { 
    data: data || { data: [] }, 
    isLoading, 
    error 
  };
}