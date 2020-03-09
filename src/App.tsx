import React, { useState } from "react";
import Select, { SelectItem } from "./components/select";
import "./App.css";

const defaultGradeItems: SelectItem[] = [
  { id: "junior", value: "Junior Consultant", isSelected: false },
  { id: "senior", value: "Senior Consultant", isSelected: false },
  { id: "lead", value: "Lead Consultant", isSelected: false }
];

const defaultSkillItems: SelectItem[] = [
  { id: "java", value: "Java", isSelected: false },
  { id: "csharp", value: "C#", isSelected: false },
  { id: "javascript", value: "JavaScript", isSelected: false },
  { id: "html", value: "HTML", isSelected: false },
  { id: "css", value: "CSS", isSelected: false },
  { id: "react", value: "React", isSelected: false },
  { id: "angular", value: "Angular", isSelected: false },
  { id: "vue", value: "Vue", isSelected: false }
];

function App() {
  const [gradeItems, setGradeItems] = useState(defaultGradeItems);
  const [skillItems, setSkillItems] = useState(defaultSkillItems);

  const handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void = e => {
    if (e.target) {
      // @ts-ignore
      const firstName = e.target["first-name"].value;
      // @ts-ignore
      const lastName = e.target["last-name"].value;

      alert(`User Name: ${firstName} ${lastName}`);
    }
    e.preventDefault();
  };

  const handleGradeSelect = (item: SelectItem) => {
    const updatedItem = gradeItems.map(gradeItem => ({
      ...gradeItem,
      isSelected: item.id === gradeItem.id
    }));
    setGradeItems(updatedItem);
  };

  const handleSkillSelect = (item: SelectItem) => {
    const updatedItem = skillItems.map(skillItem => {
      if (skillItem.id === item.id) {
        return { ...skillItem, isSelected: !item.isSelected };
      }
      return { ...skillItem };
    });
    setSkillItems(updatedItem);
  };

  return (
    <div className="app">
      <header className="app-header">Kun Xi's React Demo</header>
      <main className="app-body">
        <h2 className="body-title">Personal Info</h2>
        <form className="input-form" onSubmit={handleFormSubmit}>
          <label className="input-label" htmlFor="first-name">
            First Name:
          </label>
          <input className="text-input" id="first-name" />
          <label className="input-label" htmlFor="last-name">
            Last Name:
          </label>
          <input className="text-input" id="last-name" />
          <fieldset className="filedset">
            <legend className="filedset-legend">Gender:</legend>
            <label className="radio-label" htmlFor="gender-male">
              <input type="radio" name="gender" id="gender-male" />
              Male
            </label>

            <label className="radio-label" htmlFor="gender-female">
              <input type="radio" name="gender" id="gender-female" />
              Female
            </label>
          </fieldset>
          <label className="input-label">Grade:</label>
          <Select
            id="grade-select"
            items={gradeItems}
            onItemClicked={handleGradeSelect}
          />
          <label className="input-label">Skill:</label>
          <Select
            id="skill-select"
            items={skillItems}
            isMultiple
            onItemClicked={handleSkillSelect}
          />
          <button className="primary-button">submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
