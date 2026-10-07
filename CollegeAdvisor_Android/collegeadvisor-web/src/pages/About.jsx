import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Heart, Shield } from 'lucide-react';


const About = () => {
    return (
        <div style={{ background: '#fff' }}>
            {/* Mission Hero */}
            <section className="section-padding" style={{ 
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(36, 93, 241, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
                paddingTop: '120px'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <h1 style={{ fontSize: '64px', color: '#245df1', marginBottom: '24px' }}>
                            Our Mission <br />
                            <span style={{ color: '#1a1d23' }}>Defining the Allotment Future</span>
                        </h1>
                        <p style={{ fontSize: '20px', color: '#5e6b7e', lineHeight: 1.6 }}>
                            CollegeAdvisor is a specialized platform founded in Maharashtra to simplify the high-stakes journey of college admissions.
                            We believe that with the right data, every student can find their perfect academic home.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding">
                <div className="container">
                    <div className="horizontal-carousel">
                        {[
                            { title: "Transparency", icon: <Target size={24} color="#245df1" />, desc: "Clear, data-driven insights without the fluff." },
                            { title: "Innovation", icon: <Heart size={24} color="#245df1" />, desc: "AI-native tools built for the modern student." },
                            { title: "Empowerment", icon: <Users size={24} color="#245df1" />, desc: "Helping you take control of your academic future." },
                            { title: "Integrity", icon: <Shield size={24} color="#245df1" />, desc: "Reliable data from verified official sources." }
                        ].map((item, i) => (
                            <div key={i} className="carousel-item">
                                <div className="glass-card" style={{ padding: '32px', borderRadius: '16px', border: '1px solid #f1f5f9', height: '100%' }}>
                                    <div style={{ background: '#eef2ff', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                                    <p style={{ color: '#5e6b7e', fontSize: '15px' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Counselor */}
            <section className="section-padding" style={{ background: '#f8faff' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>Project Counselor</h2>
                    <p style={{ color: '#5e6b7e', fontSize: '18px', marginBottom: '30px' }}>Personalized guidance for students through CollegeAdvisor.</p>
                    <div className="glass-card" style={{ maxWidth: '520px', margin: '0 auto', padding: '32px', borderRadius: '24px', border: '1px solid #f1f5f9', background: 'white' }}>
                        <h3 style={{ fontSize: '28px', marginBottom: '8px' }}>Sneha Lade</h3>
                        <p style={{ color: '#245df1', fontWeight: 600 }}>Counselor • B.Tech CSE</p>
                        <p style={{ color: '#5e6b7e', marginTop: '10px' }}>KIT Kolhapur • CSE Department • Latur</p>
                        <p style={{ color: '#5e6b7e' }}>ladesneha900@gmail.com • 9096655942</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

