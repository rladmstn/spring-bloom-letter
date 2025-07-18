
import React from 'react';
import { Clock, Star, BookOpen, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface NewsletterCardProps {
  title: string;
  publisher: string;
  preview: string;
  category: string;
  publishTime: string;
  readTime: string;
  thumbnail?: string;
  isRead?: boolean;
  onClick?: () => void;
}

const NewsletterCard = ({
  title,
  publisher,
  preview,
  category,
  publishTime,
  readTime,
  thumbnail,
  isRead = false,
  onClick
}: NewsletterCardProps) => {
  return (
    <div
      className={`floating-card rounded-3xl p-6 cursor-pointer group relative overflow-hidden ${
        !isRead ? 'ring-2 ring-primary/30 shadow-xl' : 'opacity-80'
      }`}
      onClick={onClick}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex gap-6 relative z-10">
        {/* 썸네일 - 더 큰 가로 직사각형, 박스 높이에 맞게 조정 */}
        <div className="flex-shrink-0">
          <div className="w-36 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 organic-shadow">
            {thumbnail ? (
              <img 
                src={`https://images.unsplash.com/${thumbnail}?w=288&h=192&fit=crop&crop=center`} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full coral-gradient flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white/80" />
              </div>
            )}
          </div>
        </div>

        {/* 콘텐츠 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Badge 
                  variant="secondary" 
                  className="bg-primary/10 text-primary border-primary/20 text-xs px-3 py-1.5 rounded-full font-medium"
                >
                  {category}
                </Badge>
                {!isRead && (
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  </div>
                )}
              </div>
              <h3 className={`font-bold text-xl leading-tight mb-3 group-hover:text-primary transition-colors duration-300 ${
                !isRead ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {title}
              </h3>
              <p className="text-sm text-primary/80 font-medium mb-2">{publisher}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-full transition-colors duration-300 ${
                isRead ? 'bg-muted/50' : 'bg-primary/10'
              }`}>
                <Star className={`w-5 h-5 transition-colors duration-300 ${
                  isRead ? 'text-muted-foreground' : 'text-primary fill-primary/20'
                }`} />
              </div>
            </div>
          </div>
          
          <p className="text-foreground/70 text-sm leading-relaxed mb-5 line-clamp-2">
            {preview}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 micro-interaction">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Clock className="w-3 h-3 text-primary" />
                </div>
                <span className="font-medium">{publishTime}</span>
              </div>
              <div className="flex items-center gap-2 micro-interaction">
                <div className="p-1.5 rounded-full bg-accent/20">
                  <BookOpen className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="font-medium">{readTime}</span>
              </div>
            </div>
            {!isRead && (
              <div className="px-3 py-1.5 bg-primary/10 rounded-full text-xs font-medium text-primary border border-primary/20">
                새로운 글
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
