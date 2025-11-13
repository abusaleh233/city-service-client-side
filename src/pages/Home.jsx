import React from 'react';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import IssuesCard from '../components/IssuesCard';
import { useLoaderData } from 'react-router';
import CommunityStats from '../components/CommunityStats';
import VolunteerCallToAction from '../components/VolunteerCallToAction';

const Home = () => {
    const data = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <CategorySection></CategorySection>
           
            <div className="text-center text-3xl font-bold mt-10 ">Latest Issues</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 ">

                 {data.map(issue => <IssuesCard key={issue._id} issue={issue}/>)}

            </div>
            <div>
                <CommunityStats></CommunityStats>
            </div>
            <div>
                <VolunteerCallToAction></VolunteerCallToAction>
            </div>
             
        </div>
    );
};

export default Home;