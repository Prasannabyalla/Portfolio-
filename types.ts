
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  url?: string;
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}
