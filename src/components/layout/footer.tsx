import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  { label: 'Contato', href: '/contato' },
  { label: 'Política de Privacidade', href: '/privacidade' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">
              &copy; {currentYear} viewto.me. Todos os direitos reservados.
            </span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 mb-4 md:mb-0 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
           <div className="text-sm text-muted-foreground">
             <a href="mailto:contact@viewto.me" className="hover:text-foreground transition-colors">
               contact@viewto.me
             </a>
           </div>
        </div>
      </div>
    </footer>
  );
}