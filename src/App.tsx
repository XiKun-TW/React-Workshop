import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import RadioInput from "./components/RadioInput";
import Select, { SelectItem } from "./components/Select";
import { useSingleSelection } from "./components/CustomHooks/useSingleSelection";
import { useMultipleSelections } from "./components/CustomHooks/useMutipleSelections";
import { useProvinceCitys } from "./components/CustomHooks/useProvinceCitys";
import { PROVINCE_META_DATA, ProvinceName } from "./constants/citys";

const defaultGradeItems: SelectItem[] = [
  { value: "junior", text: "Junior Consultant", isSelected: false },
  { value: "senior", text: "Senior Consultant", isSelected: false },
  { value: "lead", text: "Lead Consultant", isSelected: false },
];

const defaultSkillItems: SelectItem[] = [
  { value: "java", text: "Java", isSelected: false },
  { value: "csharp", text: "C#", isSelected: false },
  { value: "javascript", text: "JavaScript", isSelected: false },
  { value: "html", text: "HTML", isSelected: false },
  { value: "css", text: "CSS", isSelected: false },
  { value: "react", text: "React", isSelected: false },
  { value: "angular", text: "Angular", isSelected: false },
  { value: "vue", text: "Vue", isSelected: false },
];

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setSelectedGrade] = useSingleSelection(defaultGradeItems);
  const [skill, setSelectedSkill] = useMultipleSelections(defaultSkillItems);
  const [citys, setProvince] = useProvinceCitys("");

  const cityItems: SelectItem[] = citys.map((city) => ({
    value: city.id,
    text: city.name,
    isSelected: false,
  }));

  const provinceItems: SelectItem[] = PROVINCE_META_DATA.map((province) => ({
    value: province.id,
    text: province.name,
    isSelected: false,
  }));

  const [provinceSelections, setProvinceSelection] = useSingleSelection(
    provinceItems
  );

  const [
    citySelections,
    setCitySelection,
    resetCitySelections,
  ] = useSingleSelection(cityItems);

  useEffect(() => {
    if (citys.length === 0) {
      return;
    }

    if (
      !citys.some((city) =>
        citySelections.find((citySelection) => citySelection.value === city.id)
      )
    ) {
      const newCitySelections: SelectItem[] = citys.map((newCity) => ({
        value: newCity.id,
        text: newCity.name,
        isSelected: false,
      }));
      resetCitySelections(newCitySelections);
    }
  }, [citys, citySelections, resetCitySelections]);

  const handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    if (e.target) {
      alert(`User Name: ${firstName} ${lastName}`);
    }

    e.preventDefault();
  };

  return (
    <div className="app">
      <header className="app-header">Kun Xi's React Demo</header>
      <main className="app-body">
        <h2 className="body-title">Personal Info</h2>
        <form className="input-form" onSubmit={handleFormSubmit}>
          <InputField
            labelName="First Name:"
            name="firstName"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
          <InputField
            labelName="Last Name:"
            name="lastName"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
          <fieldset className="filedset">
            <legend className="filedset-legend">Gender:</legend>
            <RadioInput
              id="gender-male"
              displayValue="Male"
              value="male"
              name="gender"
              checked={gender === "male"}
              onChange={(e) => setGender(e.currentTarget.value)}
            />
            <RadioInput
              id="gender-female"
              displayValue="Female"
              value="female"
              name="gender"
              checked={gender === "female"}
              onChange={(e) => setGender(e.currentTarget.value)}
            />
          </fieldset>
          <Select
            name="province"
            id="select-province"
            items={provinceSelections}
            labelName="Province:"
            onItemClicked={(selectedProvince) => {
              setProvince(selectedProvince.text as ProvinceName);
              setProvinceSelection(selectedProvince);
            }}
          />
          <Select
            name="city"
            id="select-city"
            items={citySelections}
            labelName="City:"
            onItemClicked={setCitySelection}
          />
          <Select
            name="grade"
            id="select-grade"
            items={grade}
            labelName="Grade:"
            onItemClicked={setSelectedGrade}
          />
          <Select
            name="skill"
            id="select-skill"
            items={skill}
            labelName="Skill:"
            isMultiple
            onItemClicked={setSelectedSkill}
          />
          <button className="primary-button">submit</button>
        </form>
      </main>
    </div>
  );
};

export default App;
