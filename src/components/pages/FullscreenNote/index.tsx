import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { updateNote } from '../../../redux/actions/notesActions';
import { useAppDispatch, useAppSelector } from '../../../redux/utils/hooks';
import { themeVars } from '../../../themes.css';
import { DeleteAndRestoreBtn } from './buttons/DeleteAndRestoreBtn';
import { GoBackBtn } from './buttons/GoBackBtn';
import { btnContainerClass, fullscreenNoteClass, textClass, titleClass } from './style.css';

export const FullscreenNote: React.FC = () => {
  const notes = useAppSelector(({ notesState }) => notesState.notes);
  const { id } = useParams<{ id: string }>();
  const currentNote = useMemo(() => notes.find((note) => note.id === id), [notes, id]);

  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const saveNote = useCallback(() => {
    dispatch(
      updateNote({ id, title: titleRef.current?.innerText, text: textRef.current?.innerText })
    );
  }, [id]);

  useLayoutEffect(() => {
    return saveNote;
  }, [saveNote]);

  useEffect(() => {
    window.addEventListener('unload', saveNote);
    return () => window.removeEventListener('unload', saveNote);
  }, [saveNote]);

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

  if (!currentNote) return null;

  return (
    <div className={fullscreenNoteClass}>
      <div className={btnContainerClass}>
        <GoBackBtn />
        <DeleteAndRestoreBtn />
      </div>
      <div className={titleClass} ref={titleRef} contentEditable suppressContentEditableWarning>
        {currentNote.title}
      </div>
      <div className={textClass} ref={textRef} contentEditable suppressContentEditableWarning>
        {currentNote.text}
      </div>
    </div>
  );
};
