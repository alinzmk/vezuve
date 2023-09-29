import '../App.css';
import { useState } from 'react';
import logo from "../Assets/logo-renkli.png"
import kare from "../Assets/kare-logo.jpg"
import Sidebar2 from '../Modals/Sidebar2';
import * as XLSX from "xlsx";
import Modal from "../Modals/Product-Modal";
import info from "../Assets/ürün.jpg"


function Products() {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [file, setFile] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
      
        const reader = new FileReader();
      
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
      
          const productsArray = jsonData.map((row, index) => ({
            id: index, // Add a unique identifier for each product
            productName: row['Ürün Adı'],
            price: row['Fiyat'],
            description: row['Açıklama'],
            productID: row['Firma Stok Kodu'],
            image: row['Fotoğraf'],
          }));
      
          setProducts(productsArray);
      
          // Check if productsArray is not empty before setting selectedProduct

        };
      
        reader.readAsArrayBuffer(uploadedFile);
      };
      
      const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
        <div className="dashboard m-0">
            <div className="row d-flex ">
                <div className="p-0">
                    <Sidebar2/>
                </div>
                <div className="container mt-4 slideleft right">
                    <div className="row">
                        <div className="col-12">
                            <div className="row mb-4 d-flex justify-content-between me-5">
                                <h2 className='purple w-auto mt-3'>Ürünlerim</h2>
                                <img src={logo} className='sidebar-logo' alt="" />
                            </div>
                            <div className="row slideleft">
                                <div className="col-3 pe-3 ps-0 ms-0">
                                    <div className="pbg ps-3 pe-3">

                                    <div className="row p-search mx-auto mt-4 mb-0">
                                        <div className="col-1 my-auto ms-2 p-0">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <div className="col-8 p-0">
                                            <input type="text" className='product-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Ürün Arayın'></input>
                                        </div>
                                        <div className="col-1 ps-auto m-auto">
                                        
                                            <div class="dropdown d-inline">
                                                <button class="product-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-solid fa-plus "></i>
                                                </button>
                                                <div class="dropdown-menu upload" aria-labelledby="dropdownMenuButton">
                                                    <div className="row product-dropdown">
                                                        <div className="col-12 dropdown-item m-0">
                                                            <label  for="file-upload" class=" add-product"><i class="fa-solid fa-plus"></i> Dosya Yüklemek İçin Tıklayınız </label>
                                                            <input  accept=".xls, .xlsx" id="file-upload" className='d-none' type="file" onChange={handleFileUpload}/>
                                                        </div>

                                                        <hr className='dropdown-divider' />
                                                        
                                                        <div className="col-12 dropdown-item m-0">
                                                            <Modal/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-12 p-0 product-list-container">
                                        <ul className='product-list'>
                                        {filteredProducts.map(product => (
                                            <li 
                                            key={product.id} 
                                            className={`product-item ${selectedProduct === product.id ? 'product-active' : ''}`}
                                            onClick={() => setSelectedProduct(product.id)}
                                            >
                                            {product.productName}
                                            </li>
                                        ))}
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="col-8 pbg ps-2">
                                        {products.length === 0 && <img src={info} alt="" className='fadeIn' id='add-product-info'/>}
                                         {(selectedProduct || selectedProduct === 0) && (
                                             <div className='slideleft'>
                                            <p className='profile-title'>Firma Stok Kodu: {products[selectedProduct].productID}</p>
                                            <div className="row ps-3">
                                                <div className="col-3 image-wrap">
                                                    <img id="product-image" src={products[selectedProduct].image} alt="" />
                                                </div>
                                                <div className="col-9 ps-5">
                                                    <div>
                                                        <h4 className='mb-1' > {products[selectedProduct].productName}</h4>
                                                        <h5 className='my-3'>{products[selectedProduct].price}₺</h5>
                                                        <hr style={{margin:"0 15rem 1rem 0"}}/>
                                                        <h6 className='my-4'>{products[selectedProduct].description}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Products;


