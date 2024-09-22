import { useParams } from "react-router-dom";
import { toast } from "sonner";

export interface TFacilities {
  _id?: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image: string;
  bookingsCount: number;
}
export type TFacilityProps = {
  filteredFacilities: TFacilities[];
  isLoading: boolean;
};

export type TFacilityIDProps = {
  facilityId: string | undefined;
};
