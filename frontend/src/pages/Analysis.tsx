import React, { useState, useEffect } from 'react';
import { WordService } from '../service/WordService';
import { Link } from 'react-router-dom';

interface AnalysisItem {
    topic: string;
    learnedWords: number;
    totalWords: number;
}

function AnalysisReport() {
    const [analysisData, setAnalysisData] = useState<AnalysisItem[]>([]);

    useEffect(() => {
        async function fetchAnalysisData() {
            try {
                const data = await WordService.getAnalysis();
                setAnalysisData(data);
            } catch (error) {
                console.error('Error fetching analysis data:', error);
            }
        }

        fetchAnalysisData();
    }, []);

    async function printAnalysisReport() {
        try {
            window.print();
        } catch (error) {
            console.error('Error printing analysis report:', error);
        }
    }

    return (
        <div style={{ backgroundColor: '#343a40', color: 'white', minHeight: '100vh', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Analiz Raporu</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid white', padding: '10px' }}>Konu</th>
                        <th style={{ border: '1px solid white', padding: '10px' }}>Öğrenilmiş Kelime Sayısı</th>
                        <th style={{ border: '1px solid white', padding: '10px' }}>Toplam Kelime Sayısı</th>
                        <th style={{ border: '1px solid white', padding: '10px' }}>Yüzde</th>
                    </tr>
                </thead>
                <tbody>
                    {analysisData.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid white', padding: '10px' }}>{item.topic}</td>
                            <td style={{ border: '1px solid white', padding: '10px' }}>{item.learnedWords}</td>
                            <td style={{ border: '1px solid white', padding: '10px' }}>{item.totalWords}</td>
                            <td style={{ border: '1px solid white', padding: '10px' }}>{((item.learnedWords / item.totalWords) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={printAnalysisReport} style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Raporu Yazdır</button>
                <Link to="/Main" className='btn btn-primary' style={{ color: 'white', marginLeft: '20px', textDecoration: 'none', padding: '10px' }}>Anasayfa</Link>
            </div>
        </div>
    );
}

export default AnalysisReport;
