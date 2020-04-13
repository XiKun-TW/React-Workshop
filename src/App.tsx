import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import RadioInput from "./components/RadioInput";
import Select, { SelectItem } from "./components/Select";

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
  const [grade, setGrade] = useState(defaultGradeItems);
  const [skill, setSkill] = useState(defaultSkillItems);

  const handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    if (e.target) {
      alert(`User Name: ${firstName} ${lastName}`);
    }

    e.preventDefault();
  };

  const handleGradeChange = (item: SelectItem) => {
    const updatedItem = grade.map((gradeItem) => {
      return {
        ...gradeItem,
        isSelected: item.value === gradeItem.value,
      };
    });
    setGrade(updatedItem);
  };

  const handleSkillChange = (item: SelectItem) => {
    const updatedItem = skill.map((skillItem) => {
      if (item.value === skillItem.value) {
        return {
          ...skillItem,
          isSelected: !item.isSelected,
        };
      }
      return { ...skillItem };
    });
    setSkill(updatedItem);
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
            name="grade"
            id="select-grade"
            items={grade}
            labelName="Grade:"
            onItemClicked={handleGradeChange}
          />
          <Select
            name="skill"
            id="select-skill"
            items={skill}
            labelName="Skill:"
            isMultiple
            onItemClicked={handleSkillChange}
          />
          <button className="primary-button">submit</button>
        </form>
      </main>
    </div>
  );
};

export default App;
