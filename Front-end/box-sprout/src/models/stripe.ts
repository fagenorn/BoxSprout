export interface SourceInfo {
  type: string;
  amount: number;
  currency: "eur";
  owner: {
    name: string;
    email: string;
    phone: string;
    address: {
      city: string;
      country: "BE";
      line1: string;
      postal_code: string;
    };
  };
  redirect: {
    return_url: string;
  };
  bancontact: {
    preferred_language: "nl" | "fr" | "en";
  };
}

export interface SourceResponse {
  source: any;
  error: any;
}

export interface StripeObject {
  createSource(info: SourceInfo): Promise<SourceResponse>;
}

export interface StripeConstructor {
  (pub_key: string): StripeObject;
}
