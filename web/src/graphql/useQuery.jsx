import { useQuery as useGraphqlQuery } from '@apollo/react-hooks';

export default function useQuery(query, mapper) {
  const { data, loading, error } = useGraphqlQuery(query);

  if (loading) {
    return 'loading...';
  }

  if (error) {
    return 'error...';
  }

  return mapper(data);
}
