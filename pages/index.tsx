import React, { useState } from 'react';
import { 
  Share2, 
  Video, 
  Sparkles, 
  Wand2, 
  ArrowRight, 
  Camera, 
  MapPin, 
  Image as ImageIcon,
  Cpu,
  Zap,
  ChevronRight,
  Play,
  Shirt,
  Music,
  InstagramIcon,
  Trophy,
  Crown,
  Layers,
  Heart,
  Eye,
  Users
} from 'lucide-react';


const LuxuriousAIStudio = () => {
  const [lang, setLang] = useState('ar');
  const [selectedLocation, setSelectedLocation] = useState('burj');
  const [selectedQuality, setSelectedQuality] = useState('cinematic');
  const [selectedOutfit, setSelectedOutfit] = useState('formal');
  const [selectedAudio, setSelectedAudio] = useState('epic');


  const t = {
    ar: {
      dir: 'rtl',
      brand: 'VIRALDXB',
