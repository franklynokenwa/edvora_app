import React,{useState} from 'react'
import hamburger from '../images/hamburger.png'
import Filter from './Filter'
import StyledFilterIcon from '../styles/FilterIcon.styled'



const FilterIcon = () => {
    const [toggle, setToggle] = useState(true);
    const [filterDisplay, setFilterDisplay] = useState('hidden')

    const displayFilter = (event) => {
        if (toggle === true) {
         setFilterDisplay('visible')
         setToggle(false)
         
        }else if(toggle === false){
          setFilterDisplay('hidden')
          setToggle(true)
        }
      }


  return (
    <StyledFilterIcon>
        <section>
            <img src={hamburger} alt='hamburger' img onClick={displayFilter}/>
            <p>filters</p>
        </section>
        <aside>
            <Filter filterDisplay={filterDisplay} />
        </aside>
    </StyledFilterIcon>
  )
}

export default FilterIcon