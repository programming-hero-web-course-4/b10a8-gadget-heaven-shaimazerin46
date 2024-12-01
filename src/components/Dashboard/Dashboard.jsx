import { Helmet} from 'react-helmet-async';

const Dashboard = () => {
    return (
        <div className="main-color rounded-2xl"> 
        <Helmet>
            <title>
                Gedget Heaven | Dashboard
            </title>
        </Helmet>
            <div className="mt-10  text-white text-center p-5 w-[800px] mx-auto">
                <h3 className="font-bold text-3xl mb-3">Dashboard</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        </div>
    );
};

export default Dashboard;