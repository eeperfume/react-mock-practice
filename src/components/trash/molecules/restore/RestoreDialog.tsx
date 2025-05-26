interface RestoreDialogProps {
  /** 확인 버튼 클릭 시 호출되는 함수 */
  onConfirm?: () => void;
}

const RestoreDialog = ({ onConfirm }: RestoreDialogProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-xs flex flex-col items-center">
        <p className="text-gray-700 mb-4 text-center">
          휴지통의 내용을 복구하겠습니까?
        </p>
        <button
          type="button"
          className="w-full border border-gray-300 text-gray-600 rounded-md py-2 font-medium hover:bg-gray-100 transition"
          onClick={onConfirm}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export { RestoreDialog };
