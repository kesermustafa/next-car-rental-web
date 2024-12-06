import mongoose from "mongoose";


// MongoDB bağlantısını kuran fonksiyon
const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://admin:admin@notour.ihasugb.mongodb.net/CarDB");
    } catch (error) {
        console.error("MongoDB bağlantı hatası:", error);
        process.exit(1); // Hata durumunda uygulamayı durdur
    }
};

// MongoDB bağlantısını başlat
connectDB()
    .then(() => console.log("MongoDB bağlantısı başarılı!"))
    .catch((error) => console.error("MongoDB bağlantı hatası:", error));

// Mongoose global ayarları
mongoose.Promise = global.Promise;

// Araç (Vehicle) şeması
const VehicleSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    color: String,
    mileage: Number,
    fuelType: String,
    transmission: String,
    condition: String,
    imageUrl: String,
});

// Araç (Vehicle) modelini oluştur
// Mevcut model varsa onu kullan, yoksa yeni oluştur
const Vehicle =
    mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema);

export default Vehicle;
