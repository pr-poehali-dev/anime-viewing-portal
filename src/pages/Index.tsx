import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Anime {
  id: number;
  title: string;
  description: string;
  image: string;
  genre: string[];
  year: number;
  rating: number;
  episodes: number;
}

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const animeList: Anime[] = [
    {
      id: 1,
      title: 'Тёмный Фэнтези',
      description: 'Мрачная история о молодом воине, сражающемся с демонами в параллельном мире',
      image: '/img/badba090-9eb7-4c3c-ae73-afa7fe414eea.jpg',
      genre: ['Фэнтези', 'Драма', 'Экшен'],
      year: 2023,
      rating: 8.9,
      episodes: 24
    },
    {
      id: 2,
      title: 'Школьные Дни',
      description: 'Милая история о повседневной жизни старшеклассников и их приключениях',
      image: '/img/af5af291-6b86-4d79-8705-102729cef211.jpg',
      genre: ['Школа', 'Романтика', 'Комедия'],
      year: 2022,
      rating: 7.8,
      episodes: 12
    },
    {
      id: 3,
      title: 'Стальные Гиганты',
      description: 'Эпические сражения между гигантскими роботами в далёком будущем',
      image: '/img/37dd2c26-b3d4-4f35-997e-8125d4fc18ee.jpg',
      genre: ['Меха', 'Сай-фай', 'Экшен'],
      year: 2024,
      rating: 9.2,
      episodes: 26
    },
    {
      id: 4,
      title: 'Космическая Одиссея',
      description: 'Захватывающее путешествие через галактику в поисках новых миров',
      image: '/img/37dd2c26-b3d4-4f35-997e-8125d4fc18ee.jpg',
      genre: ['Сай-фай', 'Приключения'],
      year: 2023,
      rating: 8.5,
      episodes: 20
    },
    {
      id: 5,
      title: 'Магическая Академия',
      description: 'История о юной волшебнице, изучающей магию в престижной академии',
      image: '/img/badba090-9eb7-4c3c-ae73-afa7fe414eea.jpg',
      genre: ['Магия', 'Школа', 'Фэнтези'],
      year: 2022,
      rating: 8.1,
      episodes: 16
    },
    {
      id: 6,
      title: 'Летние Каникулы',
      description: 'Трогательная история о дружбе и первой любви во время летних каникул',
      image: '/img/af5af291-6b86-4d79-8705-102729cef211.jpg',
      genre: ['Романтика', 'Драма', 'Школа'],
      year: 2024,
      rating: 7.9,
      episodes: 13
    },
    {
      id: 7,
      title: 'Герой Турниров',
      description: 'Захватывающая история о молодом бойце, стремящемся стать чемпионом мира',
      image: '/img/5f206caf-b3f3-4bae-9505-80cdf74de22e.jpg',
      genre: ['Сёнэн', 'Боевые искусства', 'Экшен'],
      year: 2023,
      rating: 8.7,
      episodes: 22
    },
    {
      id: 8,
      title: 'Проклятые Тени',
      description: 'Мистический триллер о городе, окутанном древним проклятием',
      image: '/img/930f5f9a-4aa9-492c-8384-83ec7bb997b4.jpg',
      genre: ['Ужасы', 'Мистика', 'Сверхъестественное'],
      year: 2024,
      rating: 8.3,
      episodes: 18
    },
    {
      id: 9,
      title: 'Звёзды Баскетбола',
      description: 'Динамичная спортивная драма о команде старшеклассников',
      image: '/img/67cc4699-96c8-41bd-a181-7c4e61d20577.jpg',
      genre: ['Спорт', 'Школа', 'Драма'],
      year: 2022,
      rating: 8.4,
      episodes: 25
    },
    {
      id: 10,
      title: 'Небесные Пираты',
      description: 'Приключения экипажа воздушного корабля в мире плавающих островов',
      image: '/img/37dd2c26-b3d4-4f35-997e-8125d4fc18ee.jpg',
      genre: ['Приключения', 'Фэнтези', 'Стимпанк'],
      year: 2023,
      rating: 8.6,
      episodes: 20
    },
    {
      id: 11,
      title: 'Кулинарная Битва',
      description: 'Соревнование юных поваров в престижной кулинарной академии',
      image: '/img/af5af291-6b86-4d79-8705-102729cef211.jpg',
      genre: ['Кулинария', 'Школа', 'Комедия'],
      year: 2024,
      rating: 7.8,
      episodes: 14
    },
    {
      id: 12,
      title: 'Хранители Времени',
      description: 'Группа подростков путешествует через эпохи, исправляя временные аномалии',
      image: '/img/badba090-9eb7-4c3c-ae73-afa7fe414eea.jpg',
      genre: ['Сай-фай', 'Время', 'Приключения'],
      year: 2023,
      rating: 8.8,
      episodes: 24
    },
    {
      id: 13,
      title: 'Музыкальные Сердца',
      description: 'История о группе музыкантов, покоряющих сцену своими песнями',
      image: '/img/af5af291-6b86-4d79-8705-102729cef211.jpg',
      genre: ['Музыка', 'Романтика', 'Драма'],
      year: 2022,
      rating: 8.0,
      episodes: 16
    },
    {
      id: 14,
      title: 'Детективы Теней',
      description: 'Расследования загадочных преступлений в футуристическом городе',
      image: '/img/930f5f9a-4aa9-492c-8384-83ec7bb997b4.jpg',
      genre: ['Детектив', 'Сай-фай', 'Триллер'],
      year: 2024,
      rating: 8.9,
      episodes: 21
    },
    {
      id: 15,
      title: 'Морские Легенды',
      description: 'Эпическое путешествие по морям в поисках легендарных сокровищ',
      image: '/img/37dd2c26-b3d4-4f35-997e-8125d4fc18ee.jpg',
      genre: ['Приключения', 'Пираты', 'Экшен'],
      year: 2023,
      rating: 8.5,
      episodes: 26
    }
  ];

  const allGenres = Array.from(new Set(animeList.flatMap(anime => anime.genre)));
  const allYears = Array.from(new Set(animeList.map(anime => anime.year))).sort((a, b) => b - a);

  const filteredAnime = useMemo(() => {
    return animeList.filter(anime => {
      const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           anime.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || anime.genre.includes(selectedGenre);
      const matchesYear = selectedYear === 'all' || anime.year.toString() === selectedYear;
      
      return matchesSearch && matchesGenre && matchesYear;
    });
  }, [searchTerm, selectedGenre, selectedYear, animeList]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-foreground">ANUME PORTAL RAU</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                  Каталог
                </a>
                <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                  Жанры
                </a>
                <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                  Топ
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="User" size={20} className="text-foreground/60" />
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <section className="py-8 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full md:w-96">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск аниме..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 border-border/40"
              />
            </div>
            
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full md:w-48 bg-background/50 border-border/40">
                <SelectValue placeholder="Все жанры" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все жанры</SelectItem>
                {allGenres.map(genre => (
                  <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-32 bg-background/50 border-border/40">
                <SelectValue placeholder="Год" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все годы</SelectItem>
                {allYears.map(year => (
                  <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Anime Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            Найдено: {filteredAnime.length} аниме
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Grid3X3" size={16} className="mr-2" />
              Сетка
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="List" size={16} className="mr-2" />
              Список
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAnime.map((anime) => (
            <Card key={anime.id} className="group cursor-pointer overflow-hidden bg-card/50 border-border/40 hover:bg-card/80 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="rounded-full bg-primary/90 hover:bg-primary">
                    <Icon name="Play" size={24} />
                  </Button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-black/50 text-white border-none">
                    <Icon name="Star" size={12} className="mr-1 fill-yellow-400 text-yellow-400" />
                    {anime.rating}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-card-foreground mb-2 line-clamp-1">
                  {anime.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {anime.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {anime.genre.slice(0, 2).map((genre) => (
                    <Badge key={genre} variant="outline" className="text-xs border-primary/20 text-primary">
                      {genre}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{anime.year}</span>
                  <span>{anime.episodes} эп.</span>
                </div>

                <div className="flex gap-2 mt-3">
                  <Button size="sm" className="flex-1">
                    Смотреть
                  </Button>
                  <Button size="sm" variant="outline">
                    <Icon name="Bookmark" size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <div className="text-center py-12">
            <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;