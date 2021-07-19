
export interface InfoResponse {
  date:            Date;
  status:          string;
  company_profile: CompanyProfile;
}

interface CompanyProfile {
  Sector:                string;
  Industry:              string;
  Country:               string;
  State:                 string;
  City:                  string;
  Website:               string;
  Description:           string;
  "Full Time Employees": number;
  "Company Name":        string;
  "Short Company Name":  string;
  Exchange:              string;
}

