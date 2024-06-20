import { useState, useEffect } from "react"
import * as service from "../../services/WorksCrudServices";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState, auth } from "../../services/AuthServices";

const AddWork = ()=>{
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();
    const {id} = useParams();
    const [formData, setFormData] = useState({
        date:'',
        company:'',
        service:'',
        description:'',
        from: '',
        to:'',
        uid:''
    });

    const [clients, setClients] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        if (id) {
            service.getWorkById((item) => setFormData(item), id);
        }
    }, [id]);

    useEffect(() => {
        service.getAllClients(setClients);
        service.getAllServices(setServices);
    }, []);


    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(id){
            service.updateWork(id,formData)
        }else{
            service.addWork({
                ...FormDataEvent,
                uid:user.uid
            })
        }
        navigate("/");
    }

    useEffect(()=>{
        id && service.getWorkById((item)=>setFormData(item), id)   
    },[id])

    console.log('Noriu atnaujinti dokumenta, kurio id', id)
    return (
        <div className="card">
            <div className="card-header">
                <h2>Pridėti atliktą darbą</h2>
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler} className="form">
                    <div className="mb-3">
                        <label htmlFor="date">Pasirinkite datą:</label>
                        <input type="date" name="date" className="form-control" onChange={handleChange} value={formData.date} />
                    </div>
                    <div className="mb-3">
                        <select name="company" className="form-control" onChange={handleChange} value={formData.company}>
                            <option disabled>--Pasirinkite klientą--</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.name}>
                                    {client.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select name="service" className="form-control" onChange={handleChange} value={formData.service}>
                            <option disabled>--Pasirinkite paslaugą--</option>
                            {services.map(service => (
                                <option key={service.id} value={service.name}>
                                    {service.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea name="description" className="form-control" placeholder="Darbo aprašymas" onChange={handleChange} value={formData.description}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">Nuo:</label>
                        <input type="time" name="from" className="form-control" onChange={handleChange} value={formData.from} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to">Iki:</label>
                        <input type="time" name="to" className="form-control" onChange={handleChange} value={formData.to} />
                    </div>
                    <div className="mb-3">
                        {(id) ?
                            <button type="submit" className="btn btn-primary">Atnaujinti</button> :
                            <button type="submit" className="btn btn-primary">Saugoti</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWork;