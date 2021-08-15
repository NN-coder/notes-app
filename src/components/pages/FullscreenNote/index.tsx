import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateNote } from '../../../redux/actions/notesActions';
import { useAppDispatch, useAppSelector } from '../../../redux/utils/hooks';
import { Buttons } from './Buttons';
import { ContentEditableInput } from './ContentEditableInput';
import { DateOfChange } from './DateOfChange';
import { fullscreenNoteClass, textClass, titleClass } from './style.css';

export const FullscreenNote: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentNote = useAppSelector(({ notesState }) =>
    notesState.notes.find((note) => note.id === id)
  );

  type TSelectionState = { node: Node | null; offset: number };
  const [selection, setSelection] = useState<TSelectionState>({ node: null, offset: 0 });

  const saveSelection = useCallback(() => {
    const currentSelection = document.getSelection();
    if (!currentSelection) return;

    setSelection({
      node: currentSelection.anchorNode,
      offset: currentSelection.anchorOffset,
    });
  }, []);

  useLayoutEffect(() => {
    const { node, offset } = selection;
    if (!node) return;

    const range = new Range();
    range.setStart(node, offset);
    range.setEnd(node, offset);

    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(range);
  });

  const dispatch = useAppDispatch();
  const isNoteInTrash = useAppSelector(({ notesState }) => notesState.trash.includes(id));

  if (!currentNote) return null;

  return (
    <div className={fullscreenNoteClass}>
      <Buttons noteId={id} isNoteInTrash={isNoteInTrash} />
      <ContentEditableInput
        disabled={isNoteInTrash}
        value={currentNote.title}
        className={titleClass}
        placeholder="Title"
        handleInput={({ target }) => {
          saveSelection();
          dispatch(updateNote({ id, title: (target as HTMLDivElement).innerText }));
        }}
      />
      <ContentEditableInput
        disabled={isNoteInTrash}
        value={currentNote.text}
        className={textClass}
        placeholder="Note"
        handleInput={({ target }) => {
          saveSelection();
          dispatch(updateNote({ id, text: (target as HTMLDivElement).innerText }));
        }}
      />
      <DateOfChange dateOfChange={new Date(currentNote.editedTimestamp)} />
    </div>
  );
};
