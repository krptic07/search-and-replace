import React, { useState } from "react";
import styles from "./Button.module.css";

const HomePage: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [mainText, setMainText] = useState("");
  const [matches, setMatches] = useState<number[]>([]);

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      const regex = new RegExp(searchText, "gi");
      const foundMatches = [...mainText.matchAll(regex)].map(
        (match) => match.index || 0
      );
      setMatches(foundMatches);
    }
  };

  const handleReplace = () => {
    if (matches.length > 0 && replaceText) {
      const updatedText = mainText.replace(searchText, replaceText);
      setMainText(updatedText);
    }
  };

  const handleReplaceAll = () => {
    if (matches.length > 0 && replaceText) {
      const updatedText = mainText.replaceAll(searchText, replaceText);
      setMainText(updatedText);
      setMatches([]);
      setSearchText("");
      setReplaceText("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1c1c1c",
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        padding: "2rem",
        maxWidth: "42rem",
        width: "100%",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 600,
          color: "#f7f2f2",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Text Replace Tool
      </h2>

      <div
        style={{
          position: "relative",
          marginBottom: "1rem",
        }}
        className="font-chakra"
      >
        <input
          type="text"
          placeholder="Find text..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            width: "100%",
            border: "2px solid #d1d5db",
            borderRadius: "0.375rem",
            padding: "0.75rem 3rem 0.75rem 0.75rem", // p-3 pr-12
            outline: "none",
            transition: "all 0.3s ease",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "0.75rem",
            top: "0.75rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              height: "2rem",
              width: "2rem",
            }}
          >
            <i
              onClick={() => handleSearch()}
              className="font-remix ri-search-line"
              style={{
                cursor: "pointer",
                color: searchText.trim() !== "" ? "#3b82f6" : "#4B5563",
                fontSize: "1.5rem",
              }}
            />
          </div>
        </div>
      </div>
      {matches.length > 0 && (
        <div
          style={{
            marginBottom: "1rem",
          }}
          className="font-chakra"
        >
          <input
            type="text"
            placeholder="Replace text..."
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
            style={{
              width: "100%",
              border: "2px solid #d1d5db",
              borderRadius: "0.375rem",
              padding: "0.75rem 3rem 0.75rem 0.75rem", // p-3 pr-12
              outline: "none",
              transition: "all 0.3s ease",
            }}
          />
        </div>
      )}

      <textarea
        style={{
          width: "100%",
          height: "10rem",
          border: "2px solid #d1d5db",
          borderRadius: "0.375rem",
          padding: "1rem",
          outline: "none",
          transition: "all 0.3s ease",
        }}
        className="font-chakra"
        value={mainText}
        placeholder="Enter your text here..."
        onChange={(e) => setMainText(e.target.value)}
      ></textarea>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5rem",
          gap: "1rem",
        }}
      >
        <button
          onClick={handleReplace}
          className={styles.button}
          disabled={!(replaceText.trim() !== "")}
        >
          Replace
        </button>

        <button
          onClick={handleReplaceAll}
          disabled={!(replaceText.trim() !== "")}
          className={styles.button}
        >
          Replace All
        </button>
      </div>
    </div>
  );
};

export default HomePage;
