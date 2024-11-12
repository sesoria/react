import { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getRandomLabels from '../utils/getRandomLabels';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [expanded, setExpanded] = useState(null); // Almacena el timestamp del acordeón expandido

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogs = getRandomLabels().Labels;
      const timestamp = new Date().toLocaleString(); // Formato de fecha y hora
      setLogs((prevLogs) => [...prevLogs, {timestamp, labels: newLogs}]); // Añadir nuevos elementos al final
    }, 5000); // Cada 15 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  // Maneja la expansión y colapso
  const handleChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : null);
  };

  // Función para agregar un nuevo log con un timestamp
  const addLog = (newLog) => {
    const timestamp = new Date().toLocaleString(); // Formato de fecha y hora
    setLogs((prevLogs) => [...prevLogs, { timestamp, labels: newLog.Labels }]);
  };

  // Ejemplo de agregar un log, simula recibir datos en tiempo real
  const handleAddLog = () => {
    const exampleLog = {
      Labels: [
        { Name: 'Neighborhood', Confidence: 99.99 },
        { Name: 'City', Confidence: 99.98 },
        { Name: 'Road', Confidence: 99.98 },
        { Name: 'Street', Confidence: 99.98 },
        { Name: 'Urban', Confidence: 99.98 },
        { Name: 'Person', Confidence: 98.77 },
        { Name: 'Car', Confidence: 98.19 }
      ]
    };
    addLog(exampleLog);
  };

  return (
    <div style={{ margin: '0 auto', padding: '20px' }}>
      <button onClick={handleAddLog}>Add Log</button>
      {logs.map((log, index) => (
        <Accordion key={index}
        expanded={expanded === index} // Compara para saber cuál está expandido
        onChange={handleChange(index)}
      >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">
              Scanned at: {log.timestamp}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {log.labels.map((label, idx) => (
                <ListItem key={idx} disableGutters>
                  <ListItemText 
                    primary={`${label.Name}`} 
                    secondary={`Confidence: ${label.Confidence.toFixed(2)}%`} 
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Logs;
