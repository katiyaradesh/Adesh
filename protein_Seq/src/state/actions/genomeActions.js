import { getTranscriptBySymbol, getSequenceByID } from '../../services/ProteinSequenceService'
import * as ActionTypes from './actionTypes';

export const loadTranscript = (data) => {
    console.log("d", data);
    return { type: ActionTypes.LOAD_TRANSCRIPT, payload: data };
}

export const getTranscript = (symbol) => async dispatch => {
    try {
        const result = await getTranscriptBySymbol(symbol);
        const transScriptObj = result.data;
        if (transScriptObj) {
            let seqObj = {
                symbol: symbol,
                transcripts: []
            };
            await transScriptObj.Transcript.forEach((element, index) => {
                getSequenceByID(element.id).then((sequence) => {
                    if (sequence.data && sequence.data.seq) {
                        seqObj.transcripts.push({ id: sequence.data.id, sequence: sequence.data.seq });
                        if (transScriptObj.Transcript.length == index + 1)
                            dispatch(loadTranscript(seqObj));
                        }
                });
            });
        }
    }
    catch (error) {
        dispatch(loadTranscript({}));
        console.log("error", error);
    }
}

export const getSequenceByTranscriptId = (transcriptId) => async (dispatch) => {
    try {
        const result = await getSequenceByID(transcriptId);
        return result.json();
    }
    catch (error) {
        dispatch(loadTranscript({}));
    }

}