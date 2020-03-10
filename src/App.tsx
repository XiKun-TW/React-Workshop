import React, { useEffect, useState, useRef } from "react";
import Select, { SelectItem } from "./components/select";
import { useProvinceCitys } from "./components/customHooks/useProvinceCitys";
import { useMultiSelections } from "./components/customHooks/useMultiSelections";
import { useSingleSelection } from "./components/customHooks/useSingleSelection";
import { DEFAULT_GRADE_ITEMS, DEFAULT_SKILL_ITEMS } from "./constants/mockData";
import { PROVINCE_META_DATA, ProvinceName } from "./constants/citys";
import "./App.css";

function App() {
  const provinces: SelectItem[] = PROVINCE_META_DATA.map(province => ({
    id: province.id,
    value: province.name,
    isSelected: false
  }));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFemale, setGender] = useState(false);
  const formInput = useRef(null);
  const [gradeItems, setGradeSelection] = useSingleSelection(
    DEFAULT_GRADE_ITEMS
  );
  const [skillItems, setSkillSelection] = useMultiSelections(
    DEFAULT_SKILL_ITEMS
  );
  const [provinceSelections, setProvinceSelection] = useSingleSelection(
    provinces
  );
  const [citys, setProvince] = useProvinceCitys("");
  const citySelection: SelectItem[] = citys.map(city => ({
    id: city.id,
    value: city.name,
    isSelected: false
  }));
  const [
    citySelections,
    setCitySelection,
    resetSelections
  ] = useSingleSelection(citySelection);

  const [isValid, setValidState] = useState(false);

  // handle province and city interactive
  useEffect(() => {
    if (
      !citys.every(city =>
        citySelections.find(citySelection => citySelection.id === city.id)
      )
    ) {
      const newCitySelection: SelectItem[] = citys.map(city => ({
        id: city.id,
        value: city.name,
        isSelected: false
      }));
      resetSelections(newCitySelection);
    }
  }, [citys, citySelections, resetSelections]);

  // handle submit button status
  useEffect(() => {
    const hasSelection = (items: SelectItem[]) =>
      items.some(item => item.isSelected);
    setValidState(
      !!firstName &&
        !!lastName &&
        hasSelection(gradeItems) &&
        hasSelection(skillItems) &&
        hasSelection(provinceSelections) &&
        hasSelection(citySelections)
    );
  }, [
    firstName,
    lastName,
    gradeItems,
    skillItems,
    provinceSelections,
    citySelections
  ]);

  const handleProvinceSelectionChange = (selectedProvince: SelectItem) => {
    setProvince(selectedProvince.value as ProvinceName);
    setProvinceSelection(selectedProvince);
  };

  const handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void = e => {
    if (e.target && isValid) {
      // @ts-ignore
      const firstName = e.target["first-name"].value;
      // @ts-ignore
      const lastName = e.target["last-name"].value;

      alert(`User Name: ${firstName} ${lastName}`);
    } else {
      e.preventDefault();
    }
  };

  const handleGenderChanged = () => {
    // @ts-ignore
    const gender = formInput.current["gender"].value;
    setGender(gender === "female");
  };

  return (
    <div className="app">
      <header className="app-header">Kun Xi's React Demo</header>
      <main className="app-body">
        <h2 className="body-title">Personal Info</h2>
        <form
          className="input-form"
          onSubmit={handleFormSubmit}
          ref={formInput}
        >
          <label className="input-label" htmlFor="first-name">
            First Name:
          </label>
          <input
            className="text-input"
            name="firstName"
            value={firstName}
            id="first-name"
            onInput={e => setFirstName(e.currentTarget.value)}
          />
          <label className="input-label" htmlFor="last-name">
            Last Name:
          </label>
          <input
            className="text-input"
            value={lastName}
            name="lastName"
            id="last-name"
            onInput={e => setLastName(e.currentTarget.value)}
          />
          <fieldset className="filedset">
            <legend className="filedset-legend">Gender:</legend>
            <label className="radio-label" htmlFor="gender-male">
              <input
                onChange={handleGenderChanged}
                type="radio"
                checked={!isFemale}
                value="male"
                name="gender"
                id="gender-male"
              />
              Male
            </label>

            <label className="radio-label" htmlFor="gender-female">
              <input
                onChange={handleGenderChanged}
                checked={isFemale}
                type="radio"
                value="female"
                name="gender"
                id="gender-female"
              />
              Female
            </label>
          </fieldset>
          <label className="input-label">Province:</label>
          <Select
            id="province-select"
            name="province"
            items={provinceSelections}
            onItemClicked={handleProvinceSelectionChange}
          />
          <label className="input-label">City:</label>
          <Select
            id="city-select"
            name="city"
            items={citySelections}
            onItemClicked={setCitySelection}
          />
          <label className="input-label">Grade:</label>
          <Select
            id="grade-select"
            name="grade"
            items={gradeItems}
            onItemClicked={setGradeSelection}
          />
          <label className="input-label">Skill:</label>
          <Select
            id="skill-select"
            name="skill"
            items={skillItems}
            isMultiple
            onItemClicked={setSkillSelection}
          />
          <button className={`primary-button ${isValid ? "" : "is-disabled"}`}>
            submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
