'use client'
import { useQuery } from '@tanstack/react-query';
import { getFaqs } from '../utils/api';

export function useFaq() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['faqs'],
    queryFn: getFaqs,
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, error };
}