interface ApiRequest {
  cid: string;
  device: "WEB";
  method: string;
  data: string
}

interface ApiRequestRaw {
  cid?: string;
  device?: "WEB";
  method?: string;
}