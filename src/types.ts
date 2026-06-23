/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  time: string;
  message: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Review {
  id: string;
  reviewerName: string;
  reviewerImg?: string;
  rating: number;
  content: string;
  date: string;
  source: 'google' | 'practo';
  highlight?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detailedDescription: string;
  benefits: string[];
  duration: string;
  suitability: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  category: 'exterior' | 'reception' | 'treatment' | 'equipment' | 'experience';
  imagePath: string;
  title: string;
  description?: string;
}
