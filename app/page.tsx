"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Scale, FileSearch, ArrowRight, Gavel, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function LandingPageForex() {
  const [formData, setFormData] = useState({ name: '', email: '', broker: '', amount: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      to_email: 'interaccionestelefonicas@gmail.com',
      name: formData.name,
      email: formData.email,
      broker: formData.broker,
      amount: formData.amount,
    };

    const SERVICE_ID = "service_y6z3j4k";
    const TEMPLATE_ID = "template_g3rdw63";
    const PUBLIC_KEY = "wtSjJ6ukr8aYbRcuE";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("¡Solicitud enviada con éxito! Un especialista de CAPITAL CLAIM ULTRA 9K revisará su caso y le contactará a interaccionestelefonicas@gmail.com.");
        setFormData({ name: '', email: '', broker: '', amount: '' });
        setLoading(false);
      }, (err) => {
        console.log('FAILED...', err);
        alert("Hubo un error al enviar la solicitud. Por favor, intente de nuevo.");
        setLoading(false);
      });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 p-2 rounded-lg border border-blue-500/40">
                <Scale className="h-7 w-7 text-blue-400" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-wider text-white">CAPITAL CLAIM <span className="text-blue-500">ULTRA 9K</span></h1>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Protocolo de Recuperación Financiera</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              {/* Botón del Header Redondeado (rounded-full) */}
              <a href="#evaluacion" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                Activar Reclamación
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden text-white min-h-[85vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-slate-950/85 z-0"></div>
        <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <ShieldAlert className="h-4 w-4 text-blue-400" />
                Fuerza de Choque contra Fraudes Financieros
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
                Recupere su capital. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-slate-100 drop-shadow-sm">Desmantelamos la estafa de su broker.</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                En <strong>CAPITAL CLAIM ULTRA 9K</strong> abordamos de forma implacable las disputas del mercado Forex: engaños, retenciones de fondos y plataformas irregulares. No permita que se queden con su dinero.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                {/* Botón Principal del Hero Redondeado (rounded-full) */}
                <a href="#evaluacion" className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-extrabold text-lg hover:bg-blue-500 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                  Iniciar Caso con ULTRA 9K
                  <ArrowRight className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[350px] lg:h-[500px] w-full relative flex justify-center items-center mt-12 lg:mt-4"
            >
              <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none mt-8"></div>
              
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                src="/balanza.png"
                alt="Balanza de la Justicia" 
                className="w-full max-w-sm lg:max-w-md object-contain relative z-10 drop-shadow-2xl pt-8"
                style={{ filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.5))" }}
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* IDENTIFICACIÓN DEL PROBLEMA */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">¿Víctima de maniobras ilegales en Forex?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Las plataformas no reguladas usan manipulación psicológica y técnica. Nuestro protocolo de recuperación fue diseñado para neutralizarlas.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Bloqueo de Retiros", desc: "Le exigen pagar comisiones o supuestos impuestos fantasma para liberar su propio dinero." },
              { title: "Manipulación de Gráficos", desc: "Pérdidas provocadas por alteraciones artificiales en los algoritmos de la plataforma." },
              { title: "Falsos Gestores de Cuenta", desc: "Asesores que lo presionan para realizar depósitos mayores antes de desaparecer." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }}
                className="bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-blue-500/50 transition-all"
              >
                <div className="bg-red-950/50 border border-red-500/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <ShieldAlert className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRO MÉTODO LEGAL */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">El Método CAPITAL CLAIM ULTRA 9K</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Desplegamos una estrategia integral combinando rastreo técnico, auditoría legal y presión regulatoria para forzar la restitución de su inversión.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: FileSearch, title: "1. Auditoría y Trazabilidad ULTRA 9K", desc: "Rastreamos la ruta exacta de sus fondos y la estructura legal del broker." },
                  { icon: Gavel, title: "2. Requerimiento Prejudicial Agresivo", desc: "Acción directa respaldada por normativas financieras internacionales." },
                  { icon: CheckCircle2, title: "3. Ejecución de Recobro", desc: "Exigimos la restitución total del capital bajo amenaza de acciones penales." }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <div className="bg-blue-950 p-2 rounded-lg border border-blue-500/40">
                        <step.icon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{step.title}</h4>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10 text-white">Cada hora cuenta.</h3>
              <p className="text-slate-400 mb-8 relative z-10">Los fraudes financieros mueven los fondos a través de múltiples pasarelas. Actuar rápido es clave para congelar las cuentas origen.</p>
              
              <ul className="space-y-4 mb-8 relative z-10">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Confidencialidad blindada</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Cero tolerancia hacia brokers fraudulentos</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Análisis de viabilidad sin costo inicial</span>
                </li>
              </ul>
              
              <a href="#evaluacion" className="block w-full text-center bg-blue-600 text-white py-3.5 rounded-full font-bold hover:bg-blue-500 transition-colors relative z-10 shadow-lg">
                Iniciar Evaluación del Caso
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONVERSIÓN */}
      <section id="evaluacion" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden"
          >
            <div className="bg-blue-950 p-8 text-center border-b border-blue-900/50">
              <h2 className="text-3xl font-extrabold text-white mb-3">Evaluación de Caso - ULTRA 9K</h2>
              <p className="text-blue-200 max-w-xl mx-auto">Ingrese los detalles de la plataforma para poner en marcha el diagnóstico de recuperación.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Nombre completo</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full px-4 py-3 rounded-md border border-slate-800 bg-slate-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Correo electrónico</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full px-4 py-3 rounded-md border border-slate-800 bg-slate-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="correo@ejemplo.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="broker" className="block text-sm font-semibold text-slate-300 mb-2">Nombre del Broker / Plataforma</label>
                  <input type="text" id="broker" name="broker" value={formData.broker} onChange={handleInputChange} required
                    className="w-full px-4 py-3 rounded-md border border-slate-800 bg-slate-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Ej. PlatformFX, etc." />
                </div>
                <div>
                  <label htmlFor="amount" className="block text-sm font-semibold text-slate-300 mb-2">Monto retenido estimado (USD/EUR)</label>
                  <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleInputChange} required
                    className="w-full px-4 py-3 rounded-md border border-slate-800 bg-slate-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Ej. $10,000" />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-extrabold text-lg py-4 rounded-full hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50"
                >
                  {loading ? "Enviando solicitud..." : "Enviar Reclamación a CAPITAL CLAIM ULTRA 9K"}
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  Sus datos están resguardados bajo estricto secreto profesional. Los casos se derivan a interaccionestelefonicas@gmail.com.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-sm text-center border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Scale className="h-5 w-5 text-blue-500" />
            <span className="font-black text-slate-200 text-lg tracking-wider">CAPITAL CLAIM ULTRA 9K</span>
          </div>
          <p className="mb-2">División de Reclamaciones Financieras y Disputas Forex.</p>
          <p>© {new Date().getFullYear()} CAPITAL CLAIM ULTRA 9K. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}