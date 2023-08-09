interface ApiResponse {
  status: string;
  description: string;
  data: string;
}

interface ApiResponseRaw {
  status: string;
  description: string;
  data?: any;
}