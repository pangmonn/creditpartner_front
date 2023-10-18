import React, {useState, useEffect, useCallback} from 'react';

import "./styles/majorlist.css"
import SearchBar from './SearchBar';
import MajorPopUp from "./MajorPopUp";
import * as majorAPI from "./api/majorAPI";
import department_data from "./departmentData.json";

// field, line, major 선택에 따라 그 List를 filtering하여 출력
const MajorList = ({ fieldSelected, lineSelected, majorSelected }) => {
    const [departmentData, setDepartmentData] = useState([]);
    const [filteredDepts, setFilteredDepts] = useState([]);

    // console.log(department_data);

    useEffect(() => {
        const fetchDeptData = async () => {
            try {
                const deptData = await majorAPI.getMajor();
                console.log(deptData);
    
                setDepartmentData(deptData);
                setFilteredDepts(deptData); // 이곳에서 filteredDepts 초기화
            } catch (error) {
                console.error("학과 데이터를 가져오는 중 오류 발생: ", error);
            }
        };
    
        fetchDeptData();
    }, []);
    

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
            <td>{<MajorPopUp department={dept.major} descript={dept.descript} recommend={dept.recommend} similar={dept.similar} general_credit={dept.general_credit} career_credit={dept.career_credit}/>}</td>
        </tr>
    ));

    return (
        <div className='majorListContainer'>
            <div className='searchContainer'>
                <SearchBar onSearch={handleSearch} />
            </div>
            
            {departmentData.length === 0 ? (
                <p>로딩 중...</p>
            ) : (
                <table className='categoryTable'>
                    <thead>
                        <tr>
                            <th>분야</th>
                            <th>계열</th>
                            <th>학과</th>
                            <th>바로가기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {majorList}
                    </tbody>
                </table>
            )}
        </div>
    );    
};

export default MajorList;