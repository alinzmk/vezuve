import '../App.css';
import { useState } from 'react';
import logo from "../Assets/logo-renkli.png"
import Sidebar2 from '../Modals/Sidebar2';

const tasksData = [
    { status: "plan", title: "15 ürün listeleme", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "plan", title: "15 ürün listeleme", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},

    { status: "plan", title: "15 ürün listeleme", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},

    { status: "plan", title: "5 infografik görsel", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "process", title: "5 a görsel", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
    { status: "finished", title: "5 infografik görsel", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus debitis "},
  ];
function Products() {

    const planTasks = tasksData.filter(task => task.status === 'plan');
    const processTasks = tasksData.filter(task => task.status === 'process');
    const finishedTasks = tasksData.filter(task => task.status === 'finished');

    const boxShadowColors = [
            ['rgba(85, 112, 241, 1)', '#FA58B6', '#270082', '#FF6B33', '#6B33FF'],
            ['#FA58B6', '#33FF6B', '#336BFF', '#FF6B33', '#6B33FF'],
            ['#FF5733', '#33FF6B', '#336BFF', '#FF6B33', '#6B33FF']
        ];


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
                                                <li className="task-li" key={index} style={{ boxShadow: `0px 0px 5px 1px ${boxShadowColors[0][index]}`}}>
                                                    <p className='task-title' >{task.title}</p>
                                                    <p className='task-description' >{task.description}</p>
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
                                                <li className="task-li" key={index} style={{ boxShadow: `0 0 5px 1px ${boxShadowColors[1][index]}`}}>
                                                    <p className='task-title' >{task.title}</p>
                                                    <p className='task-description' >{task.description}</p>
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
                                                <li className="task-li" key={index } style={{ boxShadow: `0 0 5px 1px ${boxShadowColors[2][index]}`}}>
                                                    <p className='task-title' >{task.title}</p>
                                                    <p className='task-description' >{task.description}</p>
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


