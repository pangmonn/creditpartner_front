import React, {useState, useCallback} from 'react';

import "./styles/majorlist.css"
import SearchBar from './SearchBar';
import MajorPopUp from "./MajorPopUp";
import departmentData from "./departmentData.json";

// field, line, major 선택에 따라 그 List를 filtering하여 출력
const MajorList = ({ fieldSelected, lineSelected, majorSelected }) => {
    const [filteredDepts, setFilteredDepts] = useState(departmentData);

    // filtering search
    const handleSearch = useCallback((searchKeyword) => {
        const filteredSearchData = departmentData.filter((data) => {
            if (searchKeyword === '') {
                return true;
            } else if (data.major.toLowerCase().includes(searchKeyword.toLowerCase())) {
                return true;
            }
            return false;
        });

        setFilteredDepts(filteredSearchData);
    }, []);

    const filteredDepartments = filteredDepts.filter((dept) => {
        // field만 선택한 경우
        if (fieldSelected && !lineSelected && !majorSelected) {
            return dept.field === fieldSelected.value;
        }

        // line까지 선택한 경우
        else if (fieldSelected && lineSelected && !majorSelected) {
            return (
                dept.field === fieldSelected.value && 
                dept.line === lineSelected.value
            )
        }
        
        // major까지 선택한 경우
        else if (fieldSelected && lineSelected && majorSelected) {
            return (
                dept.field === fieldSelected.value &&
                dept.line === lineSelected.value &&
                dept.major === majorSelected.value
            );
        }
        
        // default
        else {
            return true;
        }
    });

    // 학과 목록
    const majorList = filteredDepartments.map((dept) => (
        <tr key={dept.majorNum}>
            <td>{dept.field}</td>
            <td>{dept.line}</td>
            <td>{dept.major}</td>
            <td>
                {/* console.log(dept.major) */}
                {<MajorPopUp major_id={dept.id} major_name={dept.major} similar={dept.similar}/>}
            </td>
        </tr>
    ));

    return (
        <div className='majorListContainer'>
            <div className='searchContainer'>
                <SearchBar onSearch={handleSearch} />
            </div>
            
            <table className='categoryTable'>
                <thead>
                    <tr>
                    <th>분야</th>
                    <th>계열</th>
                    <th>학과</th>
                    <th>바로가기</th>
                    </tr>
                </thead>
                <tbody className='majorList_content'>
                    {majorList}
                </tbody>
            </table>
        </div>
        
      );
};

export default MajorList;