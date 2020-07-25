//CLASS

class PersegiPanjang{
    constructor(p,l){
        //atribut objek didefinisikan dalam method constructor
        this.panjang = p
        this.lebar = l
    }

    //fungsi luas
    luas = () => {
        return this.panjang * this.lebar
    }

    //fungsi keliling
    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

//membuat objek baru dengan class
//karena konstruktor p,l maka 10 adalah p dan 50 adalah l
let tanah = new PersegiPanjang(10,50)

//menampilkan luas objek dengan penggunaan fungsi dalam class
console.log("Luas tanah : " + tanah.luas());
//menampilkan keliling objek dengan penggunaan fungsi dalam class
console.log("Keliling tanah : " + tanah.keliling());