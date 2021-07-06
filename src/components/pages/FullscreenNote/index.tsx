import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateNote } from '../../../redux/actions/notesActions';
import { useAppDispatch, useAppSelector } from '../../../redux/utils/hooks';
import { themeVars } from '../../../themes.css';
import { DeleteAndRestoreBtn } from './buttons/DeleteAndRestoreBtn';
import { GoBackBtn } from './buttons/GoBackBtn';
import { ContentEditableInput } from './ContentEditableInput';
import { btnContainerClass, fullscreenNoteClass, textClass, titleClass } from './style.css';

type TSelectionState = { node: Node | null; offset: number };

export const FullscreenNote: React.FC = () => {
  const notes = useAppSelector(({ notesState }) => notesState.notes);
  const { id } = useParams<{ id: string }>();
  const currentNote = useMemo(() => notes.find((note) => note.id === id), [notes, id]);

  useLayoutEffect(() => {
    if (currentNote) {
      document.body.style.backgroundColor =
        currentNote.color === 'default'
          ? themeVars.bodyBgColor
          : themeVars.noteColors[currentNote.color];
    }

    return () => {
      document.body.style.backgroundColor = themeVars.bodyBgColor;
    };
  }, []);

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

  if (!currentNote) return null;

  return (
    <div className={fullscreenNoteClass}>
      <div className={btnContainerClass}>
        <GoBackBtn />
        <DeleteAndRestoreBtn />
      </div>
      <ContentEditableInput
        value={currentNote.title}
        className={titleClass}
        placeholder="Title"
        handleInput={({ target }) => {
          saveSelection();
          dispatch(updateNote({ id, title: (target as HTMLDivElement).innerText }));
        }}
      />
      <ContentEditableInput
        value={currentNote.text}
        className={textClass}
        placeholder="Note"
        handleInput={({ target }) => {
          saveSelection();
          dispatch(updateNote({ id, text: (target as HTMLDivElement).innerText }));
        }}
      />
    </div>
  );
};
