import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, handleClose }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={handleClose} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <main className={classes.content}>
          <p>{message}</p>
        </main>
        <footer className={classes.footer}>
          <Button onClick={handleClose}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
