import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../../store";
import { Repository } from "../../store/ducks/repositories/types";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import * as RepositoriesActions from "../../store/ducks/repositories/actions";

import RepositoryItem from '..//RepositoryItem';
import { Button } from "@material-ui/core";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
  loadSuccess(): void;
  loadFailure(): void;
}

interface OwnProps {
  open: boolean;
  handleClose(): void;
}

type Props = StateProps & DispatchProps & OwnProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    
    loadRequest();
  }
  
  render() {
    const { repositories, open, handleClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Lukas Fialho's Repositories"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ul>
              {repositories.map((repository) => (
                <RepositoryItem key={repository.id} repository={repository} />
              ))}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = ({ repositories }: ApplicationState) => ({
  repositories: repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
