import '../App.css';
import { useState } from 'react';
import logo from "../Assets/logo-renkli.png"
import Sidebar2 from '../Modals/Sidebar2';
import { useEffect } from 'react';
import axios from 'axios';

/* const tasksData = [
    { status: "process", title: "Fba depolarına gönderim", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "process", title: "Lojistik Firmasını belirlemek", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "process", title: "Giveaway çalışması", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "process", title: "Kupon ve indirimler", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "plan", title: "Amazon PPC Reklamları", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "plan", title: "Amazon Marka Kaydı", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "plan", title: "A+ Content ", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "plan", title: "Amazon Store Tasarımı", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "plan", title: "Request Review", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "plan", title: "Stok Yenileme", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "plan", title: "Ürün Listeleme", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "plan", title: "Gümrük Kaydı ve Gümrük Müşaviri", description: ""},
    { status: "plan", title: "Gs1 Barkodlarının Alınması", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "finished", title: "Amazon Mağaza Açılışı", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "finished", title: "Amazon Pazar Araştırması", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
  ]; */

function Products() {

    
    const boxShadowColors = [
        ['#FA58B6'],
        ['yellow', '#33FF6B', '#336BFF', '#FF6B33', '#6B33FF'],
        ['#270082', '#33FF6B', '#336BFF', '#FF6B33', '#6B33FF'], 
    ];

    const [userTasks, setUserTasks] = useState(null); // State to store user tasks data
    
    // Function to fetch user tasks data
    const fetchUserTasks = async (accessToken) => {
        try {
            const response = await axios.get('https://localhost:6161/get_user_tasks', {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Include the JWT token in the header
            },
        });
                                
            // Assuming the response contains tasks
            const tasksResponse = response.data.tasks;
            
            // Set the tasks in the component state
            setUserTasks(tasksResponse);
        } 
        catch (error) {
            // Handle error here
            console.error('Error fetching user tasks:', error);
            // Handle error state or notify the user about the error
        }
    };

    useEffect(() => {
        const accessToken = localStorage.getItem("token"); // Replace with the actual access token
        fetchUserTasks(accessToken);
    }, []); // Run only once on component mount


    const planTasks = userTasks.filter(task => task.status === 'plan');
    const processTasks = userTasks.filter(task => task.status === 'process');
    const finishedTasks = userTasks.filter(task => task.status === 'finished');
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
                                <h2 className='purple w-auto mt-3'>Proje Alanı</h2>
                                <img src={logo} className='sidebar-logo' alt="" />
                            </div>
                            <div className="row slideleft task-wrapper">
                                <div className="col-4 pe-3 ps-0 ms-0">
                                    <div className="task-seperator pbg ps-3 pe-3">
                                        <h5 className='task-status'><i class="fa-solid fa-list-check ms-2 my-auto"></i> Planlandı</h5>
                                        <ul id="plan" className="task-ul">
                                            {planTasks.map((task, index) => (
                                                <li className="task-li" key={index} style={{ boxShadow: `0px 0px 5px 1px #FA58B6`}}>
                                                    <p className='task-title' >{task.taskName}</p>
                                                        <div className='task-icon'>
                                                            <i class="fa-solid fa-list-check ms-2 my-auto"></i>
                                                        </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 pe-3 ps-0 ms-0">
                                    <div className="task-seperator pbg ps-3 pe-3">
                                        <h5 className='task-status'><i class="fa-regular fa-clock ms-2 my-auto"></i> Süreç İşliyor</h5>
                                        <ul id="process" className="task-ul">
                                            {processTasks.map((task, index) => (
                                                <li className="task-li" key={index} style={{ boxShadow: `0 0 5px 1px yellow`}}>
                                                    <p className='task-title' >{task.taskName}</p>
                                                        <div className='task-icon'>
                                                            <i class="fa-regular fa-clock ms-2 my-auto"></i>
                                                        </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 pe-3 ps-0 ms-0">
                                    <div className="task-seperator pbg ps-3 pe-3">
                                        <h5 className='task-status'><i class="fa-solid fa-check-double ms-2 my-auto"></i> Tamamlandı</h5>
                                        <ul id="finished" className="task-ul">
                                            {finishedTasks.map((task, index) => (
                                                <li className="task-li" key={index } style={{ boxShadow: `0 0 5px 1px #270082`}}>
                                                    <p className='task-title' >{task.taskName}</p>
                                                        <div className='task-icon'>
                                                            <i class="fa-solid fa-check-double ms-2 my-auto"></i>
                                                        </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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


