import { useEffect, useState } from 'react'
import Sort from '../FindJobs/Sort'
import TalentCard from './TalentCard'
import { getAllProfiles } from '../../Services/ProfileService'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilter } from '../../Slices/FilterSlice'

const Talent = () => {
  const dispatch = useDispatch();
  const [talents, setTalents] = useState<any[]>([]); // Typage plus précis
  const filter = useSelector((state: any) => state.filter);
  const [filteredTalents, setFilteredTalents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    dispatch(resetFilter());
    setLoading(true);
    
    getAllProfiles()
      .then((res) => {
        if (!res) throw new Error("No data received");
        setTalents(Array.isArray(res) ? res : []);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to load talents");
        setTalents([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    try {
      let filterTalent = talents; // Copie du tableau

      if (filter.name) {
        filterTalent = filterTalent.filter((talent:any) => 
          talent?.name?.toLowerCase().includes(filter.name.toLowerCase())
        );
      }

      if (filter["Job Title"] && filter["Job Title"]?.length > 0) {
        filterTalent = filterTalent.filter((talent:any) => 
          filter["Job Title"]?.some((title: any) =>
            talent?.jobTitle?.toLowerCase().includes(title.toLowerCase())
          )
        );
      }

      if (filter.Location && filter.Location?.length > 0) {
        filterTalent = filterTalent.filter((talent: any) =>
          filter.Location?.some((location: any) =>
            talent?.location?.toLowerCase().includes(location.toLowerCase())));
      }
      
      if (filter.Skills && filter.Skills?.length > 0) {
        filterTalent = filterTalent.filter((talent: any) =>
          filter.Skills?.some((skill: any) =>
            talent.skills.some((talentSkill: string) =>
              talentSkill?.toLowerCase().includes(skill.toLowerCase())
            )
          )
        );
      }

      if (filter.exp?.length === 2) {
        filterTalent = filterTalent.filter((talent: any) => 
          filter.exp[0] <= talent.totalExp && 
          talent.totalExp <= filter.exp[1]
        );
      }

      setFilteredTalents(filterTalent);
    } catch (err) {
      console.error("Filter error:", err);
      setFilteredTalents([]);
    }
  }, [filter, talents]);

  if (loading) return <div>Loading talents...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='px-5 py-5'>
      <div className='flex justify-between mt-5'>
        <div className='text-2xl font-semibold'>Talents</div>
        <Sort />
      </div>
      
      <div className='mt-10 flex flex-wrap gap-5 justify-between'>
        {
          filteredTalents.length?(filteredTalents.map((talent:any, index:any) => (
            <TalentCard key={index} {...talent} />
          ))):
          <div>No talents match your filters</div>
        }
      </div>
    </div>
  );
};

export default Talent;