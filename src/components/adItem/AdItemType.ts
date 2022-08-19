export interface AdsItemProps {
  id?: number;
  image?: any;
  name?: string;
  rating?: number;
  amount?: number;
  currency?: string;
  details?: string;
  location?: {
    street?: string;
    state?: string;
  };
}
