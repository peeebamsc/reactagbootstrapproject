import { useEffect, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import VisitedRenderer from "./VisitedRenderer";
import ImageRenderer from "./ImageRenderer";
import VisitedHeader from "./VisitedHeader";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const gridRef = useRef();
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [columnDefs] = useState([
    {
      headerName: "Country",
      field: "country",
    },
    {
      headerName: "Image",
      field: "image",
      flex: 1,
      cellRenderer: ImageRenderer,
    },
    {
      headerName: "Visited",
      headerComponent: VisitedHeader,
      headerComponentParams: {
        setFilterEnabled,
      },
      field: "visited",
      cellRenderer: VisitedRenderer,
    },
  ]);
  const [rowData] = useState([
    {
      country: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
      visited: false,
    },
    {
      country: "United States",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
      visited: false,
    },
    {
      country: "India",
      visited: false,
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
    },
    {
      country: "Canada",
      visited: false,
      image:
        "https://images.unsplash.com/photo-1519832979-6fa011b87667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2353&q=80",
    },
    {
      country: "Brazil",
      visited: false,
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    },
    {
      country: "Germany",
      visited: false,
      image:
        "https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2373&q=80",
    },
    {
      country: "France",
      visited: false,
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    },
  ]);
  const doesExternalFilterPass = (node) => {
    return node.data.visited;
  };

  useEffect(() => {
    if (gridRef.current && gridRef.current.api) {
      gridRef.current.api.onFilterChanged();
    }
  }, [filterEnabled]);

  return (
    <Card body className="h-100">
      <Stack className="h-100">
        <Card.Title>Countries to visit</Card.Title>
        <div className="ag-theme-material h-100 w-100">
          <AgGridReact
            ref={gridRef}
            columnDefs={columnDefs}
            rowData={rowData}
            rowHeight={200}
            doesExternalFilterPass={doesExternalFilterPass}
            isExternalFilterPresent={() => filterEnabled}
          ></AgGridReact>
        </div>
      </Stack>
    </Card>
  );
};

export default App;