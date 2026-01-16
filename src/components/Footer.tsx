import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-3xl font-bold mb-6">Más que seres</h3>
                        <p className="text-slate-400 text-lg max-w-sm mb-8">
                            Un viaje hacia la consciencia y la profundidad humana a través del diálogo y la reflexión.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Instagram</a>
                            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">YouTube</a>
                            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Spotify</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Explorar</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="/episodios" className="hover:text-white transition-colors">Episodios</a></li>
                            <li><a href="/blog" className="hover:text-white transition-colors">Bitácora</a></li>
                            <li><a href="/asistente" className="hover:text-white transition-colors">Asistente AI</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} MasQueSeres. Todos los derechos reservados.</p>
                    <p className="flex items-center gap-2">
                        Hecho con <span className="text-cyan-600">❤</span> para la conexión humana.
                    </p>
                </div>
            </div>
        </footer>
    );
};
