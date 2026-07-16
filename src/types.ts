export interface Project {
  id: string;
  title: string;
  category: 'energy-tech' | 'rd' | 'real-estate' | 'creative';
  description: string;
  fullDetails: string;
  image: string; // fallback or generated illustration style
  client?: string;
  location?: string;
  date: string;
  tags: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  date: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
  category: string;
  features: string[];
}
