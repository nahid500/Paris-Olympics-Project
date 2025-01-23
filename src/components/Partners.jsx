import partner1 from '../images/partner1.png';
import partner2 from '../images/partner2.png';
import partner3 from '../images/partner3.png';
import partner4 from '../images/p4.png';
import partner5 from '../images/p5.jpeg';
import partner6 from '../images/p5.png';
import partner7 from '../images/p7.png';
import partner8 from '../images/p8.png';
import partner9 from '../images/p9.png';

const Partners = () => {
    return (
        <div className="p-5 bg-slate-300">
            <h1 className="text-center font-bold text-2xl mb-8 border-b-2 border-cyan-800 ">Our Proud Partners</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl mx-auto">
                {[partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9].map((partner, index) => (
                    <img
                        key={index}
                        src={partner}
                        alt={`Partner ${index + 1}`}
                        className="w-full h-64 object-fill rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
};

export default Partners;
