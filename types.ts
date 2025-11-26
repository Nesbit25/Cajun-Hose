export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  specs: string[];
  imageUrl: string;
}

export interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string; // e.g., Full-time
  description: string;
}

export interface ServicePillar {
  title: string;
  description: string;
  icon: 'clock' | 'wrench' | 'shield' | 'truck';
}