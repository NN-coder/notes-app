import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { updateNote } from '../../../redux/actions/notesActions';
import { useAppDispatch, useAppSelector } from '../../../redux/utils/hooks';
import { fullscreenNoteClass, textClass, titleClass } from './style.css';

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

  return (
    <div className={fullscreenNoteClass}>
      <div className={titleClass} ref={titleRef} contentEditable suppressContentEditableWarning>
        {currentNote?.title}
      </div>
      <div className={textClass} ref={textRef} contentEditable suppressContentEditableWarning>
        {currentNote?.text}
      </div>
    </div>
  );
};
