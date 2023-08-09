interface EditProfileRequest {
  file: File 
}

interface EditProfileResponseData {
  photo: string;
}

interface EditProfileResponse {
  data: EditProfileResponseData[];
}