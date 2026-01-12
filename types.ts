export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password?: string;
  refId: string;
  leader: string;
  joined: string;
  isVerified: boolean;
  proJobActive: boolean;
  referredBy: number | null; // ID of the user who referred this user
  verificationDate: string | null; // ISO date string
  isAdmin?: boolean; // New property to identify admins
  wallets: {
    proJob: number;
    referral: number;
    gmail: number;
    server: number;
    salary: number;
    jobBalance: number;
  };
}

export interface ProofConfig {
  type: 'image' | 'text';
  label: string;
}

export interface SubmittedProof {
  type: 'image' | 'text';
  label: string;
  value: string; // base64/URL for image, text for text
}

export interface Job {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  likes: string;
  views: string;
  reward: number;
  proofsConfig: ProofConfig[];
  taskUrl?: string;
  rules?: string;
}

export interface Transaction {
  id: number;
  userId: number;
  userName:string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
  transactionId?: string; // For deposits
  withdrawalNumber?: string; // For withdrawals
  paymentMethod?: 'bkash' | 'nagad' | 'rocket'; // For withdrawals
}

export interface JobSubmission {
  id: number;
  userId: number;
  userName: string;
  jobId: number;
  jobTitle: string;
  proofs: SubmittedProof[];
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
}

export interface AppSettings {
  paymentNumbers: {
    bkash: string;
    nagad: string;
    rocket: string;
  };
  telegramLinks: {
    group: string;
    channel: string;
  };
  verificationFee: number;
  referralBonus: number;
}
